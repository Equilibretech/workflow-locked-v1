---
name: monitor
description: Setup observability and monitoring for deployed application (Stage 6)
args:
  - name: environment
    description: Environment to monitor (staging, production)
    required: true
  - name: service_name
    description: Name of the service/application to monitor
    required: false
  - name: monitoring_type
    description: Type of monitoring (setup, dashboard, alerts, health-check)
    required: false
---

# Monitoring Setup: {environment}

## 📊 Observability Overview

**Environment**: {environment}
**Service**: {service_name}
**Monitoring Type**: {monitoring_type}
**Date**: {current_date}

> **Objective**: Establish comprehensive monitoring, alerting, and observability for {service_name} in {environment} environment.

## 🔧 Monitoring Stack Setup

### 1. Error Tracking (Sentry)

#### Sentry Configuration
```bash
# Install Sentry SDK
npm install @sentry/node @sentry/react

# Configure Sentry for Node.js backend
cat > src/monitoring/sentry.js << EOF
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
  tracesSampleRate: {environment === 'production' ? '0.1' : '1.0'},
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
  ],
});

export default Sentry;
EOF

# Configure Sentry for React frontend
cat > src/monitoring/sentry-client.js << EOF
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
  ],
  tracesSampleRate: {environment === 'production' ? '0.1' : '1.0'},
});

export default Sentry;
EOF
```

#### Sentry Integration
```javascript
// Express error handling middleware
app.use(Sentry.Handlers.errorHandler());

// React error boundary
import { ErrorBoundary } from "@sentry/react";

function App() {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <MyApp />
    </ErrorBoundary>
  );
}
```

### 2. Application Health Endpoints

#### Health Check Implementation
```javascript
// Create health check endpoint
app.get('/api/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    checks: {}
  };

  try {
    // Database health check
    await checkDatabase();
    health.checks.database = { status: 'healthy', responseTime: 'X ms' };
  } catch (error) {
    health.checks.database = { status: 'unhealthy', error: error.message };
    health.status = 'unhealthy';
  }

  try {
    // External services health check
    await checkExternalServices();
    health.checks.external_services = { status: 'healthy' };
  } catch (error) {
    health.checks.external_services = { status: 'unhealthy', error: error.message };
    health.status = 'degraded';
  }

  const statusCode = health.status === 'healthy' ? 200 : 503;
  res.status(statusCode).json(health);
});

// Readiness probe
app.get('/api/ready', (req, res) => {
  // Check if application is ready to receive traffic
  res.status(200).json({ status: 'ready' });
});

// Liveness probe  
app.get('/api/live', (req, res) => {
  // Check if application is alive
  res.status(200).json({ status: 'alive' });
});
```

### 3. Application Metrics

#### Custom Metrics Collection
```javascript
// Metrics collection with Prometheus format
const promClient = require('prom-client');

// Create custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
});

const activeUsers = new promClient.Gauge({
  name: 'active_users_total',
  help: 'Number of active users',
});

const databaseQueries = new promClient.Counter({
  name: 'database_queries_total',
  help: 'Total number of database queries',
  labelNames: ['operation', 'status'],
});

// Middleware to track metrics
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .observe(duration);
  });
  
  next();
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});
```

## 📈 Dashboard Setup

### 1. Health Dashboard

#### Create Health Dashboard Component
```jsx
// Health Dashboard React Component
import React, { useState, useEffect } from 'react';

export function HealthDashboard() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await fetch('/api/health');
        const data = await response.json();
        setHealthData(data);
      } catch (error) {
        console.error('Failed to fetch health data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthData();
    const interval = setInterval(fetchHealthData, 30000); // Poll every 30s

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading health data...</div>;

  return (
    <div className="health-dashboard">
      <h2>System Health - {environment}</h2>
      
      <div className="health-status">
        <span className={`status ${healthData.status}`}>
          {healthData.status.toUpperCase()}
        </span>
        <span>Last updated: {new Date(healthData.timestamp).toLocaleString()}</span>
      </div>

      <div className="health-checks">
        {Object.entries(healthData.checks).map(([service, check]) => (
          <div key={service} className={`check ${check.status}`}>
            <strong>{service}</strong>: {check.status}
            {check.responseTime && <span> ({check.responseTime})</span>}
          </div>
        ))}
      </div>

      <div className="system-metrics">
        <div>Uptime: {Math.floor(healthData.uptime / 3600)}h</div>
        <div>Memory: {Math.round(healthData.memory.used / 1024 / 1024)}MB</div>
        <div>Version: {healthData.version}</div>
      </div>
    </div>
  );
}
```

### 2. Performance Metrics Dashboard

#### Real-time Metrics Display
```jsx
// Performance Metrics Component
export function MetricsDashboard() {
  const [metrics, setMetrics] = useState({
    responseTime: [],
    errorRate: 0,
    throughput: 0,
    activeUsers: 0
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      const response = await fetch('/api/metrics/summary');
      const data = await response.json();
      setMetrics(data);
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="metrics-dashboard">
      <h2>Performance Metrics</h2>
      
      <div className="metric-cards">
        <div className="metric-card">
          <h3>Response Time</h3>
          <div className="metric-value">{metrics.avgResponseTime}ms</div>
        </div>
        
        <div className="metric-card">
          <h3>Error Rate</h3>
          <div className="metric-value">{metrics.errorRate}%</div>
        </div>
        
        <div className="metric-card">
          <h3>Throughput</h3>
          <div className="metric-value">{metrics.throughput} req/s</div>
        </div>
        
        <div className="metric-card">
          <h3>Active Users</h3>
          <div className="metric-value">{metrics.activeUsers}</div>
        </div>
      </div>
    </div>
  );
}
```

## 🚨 Alerting Configuration

### 1. Alert Rules Setup

#### Define Alert Thresholds
```yaml
# alerts.yml - Alert configuration
alerts:
  response_time:
    threshold: 2000  # 2 seconds
    duration: 5m
    severity: warning
    
  error_rate:
    threshold: 5  # 5%
    duration: 2m
    severity: critical
    
  cpu_usage:
    threshold: 80  # 80%
    duration: 5m
    severity: warning
    
  memory_usage:
    threshold: 90  # 90%
    duration: 3m
    severity: critical
    
  disk_space:
    threshold: 85  # 85%
    duration: 10m
    severity: warning
```

#### Alerting Functions
```javascript
// Alert manager
class AlertManager {
  constructor() {
    this.alerts = [];
    this.thresholds = {
      responseTime: 2000,
      errorRate: 5,
      cpuUsage: 80,
      memoryUsage: 90
    };
  }

  checkMetrics(metrics) {
    // Check response time
    if (metrics.avgResponseTime > this.thresholds.responseTime) {
      this.triggerAlert('response_time', {
        value: metrics.avgResponseTime,
        threshold: this.thresholds.responseTime
      });
    }

    // Check error rate
    if (metrics.errorRate > this.thresholds.errorRate) {
      this.triggerAlert('error_rate', {
        value: metrics.errorRate,
        threshold: this.thresholds.errorRate
      });
    }
  }

  async triggerAlert(type, data) {
    const alert = {
      type,
      timestamp: new Date(),
      environment: process.env.NODE_ENV,
      service: '{service_name}',
      data
    };

    // Send to Slack
    if (process.env.SLACK_WEBHOOK) {
      await this.sendSlackAlert(alert);
    }

    // Send email
    if (process.env.ALERT_EMAIL) {
      await this.sendEmailAlert(alert);
    }

    // Log alert
    console.error('ALERT:', alert);
  }

  async sendSlackAlert(alert) {
    const message = {
      text: `🚨 Alert: ${alert.type}`,
      attachments: [{
        color: 'danger',
        fields: [
          { title: 'Service', value: alert.service, short: true },
          { title: 'Environment', value: alert.environment, short: true },
          { title: 'Value', value: alert.data.value, short: true },
          { title: 'Threshold', value: alert.data.threshold, short: true },
        ]
      }]
    };

    await fetch(process.env.SLACK_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
  }
}

// Initialize alert manager
const alertManager = new AlertManager();

// Check metrics every minute
setInterval(async () => {
  const metrics = await collectMetrics();
  alertManager.checkMetrics(metrics);
}, 60000);
```

## 📊 Logging Strategy

### 1. Structured Logging

#### Winston Logger Configuration
```javascript
// logger.js - Structured logging setup
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: {
    service: '{service_name}',
    environment: process.env.NODE_ENV
  },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Add console transport for development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Request logging middleware
const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP Request', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration,
      userAgent: req.get('User-Agent'),
      ip: req.ip
    });
  });
  
  next();
};

module.exports = { logger, requestLogger };
```

### 2. Log Aggregation

#### ELK Stack Integration (Optional)
```yaml
# docker-compose.monitoring.yml
version: '3.8'
services:
  elasticsearch:
    image: elasticsearch:7.14.0
    environment:
      - discovery.type=single-node
    ports:
      - "9200:9200"
    
  logstash:
    image: logstash:7.14.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5000:5000"
    depends_on:
      - elasticsearch
      
  kibana:
    image: kibana:7.14.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch
```

## 🔍 Performance Monitoring

### 1. Real User Monitoring (RUM)

#### Client-side Performance Tracking
```javascript
// performance.js - Client-side performance monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.startTime = performance.now();
  }

  // Track page load performance
  trackPageLoad() {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      
      this.sendMetric('page_load', {
        dns_lookup: perfData.domainLookupEnd - perfData.domainLookupStart,
        tcp_connection: perfData.connectEnd - perfData.connectStart,
        server_response: perfData.responseEnd - perfData.requestStart,
        dom_processing: perfData.domContentLoadedEventEnd - perfData.responseEnd,
        total_load_time: perfData.loadEventEnd - perfData.navigationStart
      });
    });
  }

  // Track user interactions
  trackUserInteraction(action, element) {
    this.sendMetric('user_interaction', {
      action,
      element: element.tagName,
      timestamp: Date.now()
    });
  }

  // Track API call performance
  trackAPICall(url, method, startTime, endTime, status) {
    this.sendMetric('api_call', {
      url,
      method,
      duration: endTime - startTime,
      status,
      timestamp: Date.now()
    });
  }

  sendMetric(type, data) {
    fetch('/api/metrics/client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data, timestamp: Date.now() })
    }).catch(err => console.warn('Failed to send metric:', err));
  }
}

// Initialize performance monitoring
const perfMonitor = new PerformanceMonitor();
perfMonitor.trackPageLoad();
```

## 📋 Monitoring Health Report

### Generate Health Report
```bash
#!/bin/bash
# health-report.sh - Generate comprehensive health report

echo "# Health Report - {environment} Environment"
echo "Generated: $(date)"
echo ""

# Application health
echo "## Application Health"
HEALTH_RESPONSE=$(curl -s http://localhost:3000/api/health)
echo "Status: $(echo $HEALTH_RESPONSE | jq -r '.status')"
echo "Uptime: $(echo $HEALTH_RESPONSE | jq -r '.uptime')s"
echo ""

# System metrics
echo "## System Metrics"
echo "CPU Usage: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')%"
echo "Memory Usage: $(free | grep Mem | awk '{printf "%.2f%%", $3/$2 * 100.0}')"
echo "Disk Usage: $(df -h / | awk 'NR==2{printf "%s", $5}')"
echo ""

# Error rates
echo "## Error Rates (Last 24h)"
echo "Critical Errors: $(grep -c 'ERROR' logs/error.log || echo 0)"
echo "Warning Count: $(grep -c 'WARN' logs/combined.log || echo 0)"
echo ""

# Performance metrics
echo "## Performance Metrics"
METRICS=$(curl -s http://localhost:3000/api/metrics/summary)
echo "Avg Response Time: $(echo $METRICS | jq -r '.avgResponseTime')ms"
echo "Error Rate: $(echo $METRICS | jq -r '.errorRate')%"
echo "Throughput: $(echo $METRICS | jq -r '.throughput') req/s"
```

## ✅ Monitoring Checklist

### Implementation Checklist
- [ ] **Sentry error tracking** configured and tested
- [ ] **Health endpoints** implemented (/health, /ready, /live)
- [ ] **Custom metrics** collection setup
- [ ] **Alerting rules** configured with appropriate thresholds
- [ ] **Dashboard** created for health and performance monitoring
- [ ] **Structured logging** implemented with Winston
- [ ] **Performance monitoring** setup for client and server
- [ ] **Alert notifications** configured (Slack/Email)
- [ ] **Health report** generation automated

### Validation Tests
- [ ] **Health endpoint** returns 200 status
- [ ] **Metrics endpoint** returns Prometheus format data
- [ ] **Alert system** triggers test alert successfully
- [ ] **Dashboard** displays real-time data
- [ ] **Error tracking** captures and reports exceptions
- [ ] **Performance metrics** are being collected
- [ ] **Logs** are structured and searchable

---

## 🎯 Monitoring Setup Complete

**Status**: ✅ Comprehensive monitoring established for {environment}
**Dashboard URL**: {dashboard_url}
**Health Check URL**: {health_url}

### Gate 6 Validation Checklist
- [ ] Error tracking operational (Sentry)
- [ ] Health endpoints responding correctly
- [ ] Performance metrics being collected
- [ ] Alerting system configured and tested
- [ ] Dashboard accessible and updating
- [ ] Logging structured and centralized
- [ ] Monitoring documentation updated
- [ ] Team trained on monitoring tools

**Ready for**: `claude-code "/context-refresh sprint-retrospective"`