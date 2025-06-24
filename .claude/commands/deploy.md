---
name: deploy
description: Deploy application to staging/production with quality gates (Stage 5)
args:
  - name: environment
    description: Target environment (staging, production)
    required: true
  - name: version
    description: Version tag or branch to deploy
    required: false
  - name: service
    description: Specific service to deploy (for microservices)
    required: false
---

# Deploy to {environment}: {version}

## 🚀 Deployment Overview

**Environment**: {environment}
**Version**: {version}
**Service**: {service}
**Date**: {current_date}
**Deployment ID**: {deployment_id}

> **Objective**: Deploy application to {environment} environment with full quality gate validation and rollback capability.

## 📋 Pre-Deployment Checklist

### Code Quality Gates
- [ ] **All tests passing** (`npm run test`)
- [ ] **Linting clean** (`npm run lint:check`)
- [ ] **Coverage >80%** (`npm run test:coverage`)
- [ ] **Security audit passed** (`npm audit`)
- [ ] **Build successful** (`npm run build`)

### Environment Readiness
- [ ] **Infrastructure provisioned**
- [ ] **Environment variables configured**
- [ ] **Secrets properly set**
- [ ] **Database migrations ready**
- [ ] **External services accessible**

### Team Coordination
- [ ] **Code review approved**
- [ ] **Deployment window confirmed**
- [ ] **Team notified**
- [ ] **Rollback plan ready**
- [ ] **Monitoring alerts configured**

## ⚙️ Build Process

### 1. Environment Validation
```bash
# Verify environment configuration
echo "🔍 Validating {environment} environment..."

# Check required environment variables
if [ -z "$DATABASE_URL" ]; then
  echo "❌ DATABASE_URL not set"
  exit 1
fi

if [ -z "$JWT_SECRET" ]; then
  echo "❌ JWT_SECRET not set"  
  exit 1
fi

echo "✅ Environment variables validated"
```

### 2. Quality Gates Execution
```bash
# Run comprehensive quality checks
echo "🧪 Running quality gates..."

# Linting
npm run lint:check
if [ $? -ne 0 ]; then
  echo "❌ Linting failed"
  exit 1
fi

# Tests with coverage
npm run test:coverage
if [ $? -ne 0 ]; then
  echo "❌ Tests failed"
  exit 1
fi

# Security audit
npm audit --audit-level high
if [ $? -ne 0 ]; then
  echo "❌ Security vulnerabilities found"
  exit 1
fi

echo "✅ All quality gates passed"
```

### 3. Build Application
```bash
# Build for production
echo "🏗️ Building application..."

npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

echo "✅ Build completed successfully"
```

## 🐳 Container Deployment

### Docker Build & Push
```bash
# Build Docker image
echo "📦 Building Docker image..."

# Tag with version and environment
IMAGE_TAG="{project_name}:{version}-{environment}"
LATEST_TAG="{project_name}:latest-{environment}"

# Build image
docker build -t $IMAGE_TAG -t $LATEST_TAG .

# Push to registry
docker push $IMAGE_TAG
docker push $LATEST_TAG

echo "✅ Docker image built and pushed: $IMAGE_TAG"
```

### Container Orchestration
```bash
# Deploy with Docker Compose or Kubernetes
if [ "{environment}" = "staging" ]; then
  # Staging deployment
  docker-compose -f docker-compose.staging.yml up -d
elif [ "{environment}" = "production" ]; then
  # Production deployment
  kubectl apply -f k8s/production/
fi
```

## 🌐 Platform-Specific Deployment

### Vercel Deployment
```bash
# Deploy to Vercel
echo "🚀 Deploying to Vercel ({environment})..."

if [ "{environment}" = "staging" ]; then
  vercel --prod=false
elif [ "{environment}" = "production" ]; then
  vercel --prod
fi

echo "✅ Vercel deployment completed"
```

### Netlify Deployment
```bash
# Deploy to Netlify
echo "🚀 Deploying to Netlify ({environment})..."

netlify deploy --dir=dist --prod=$([ "{environment}" = "production" ] && echo "true" || echo "false")

echo "✅ Netlify deployment completed"
```

### AWS/GCP/Azure Deployment
```bash
# Cloud provider deployment
echo "☁️ Deploying to cloud provider..."

# Configure provider-specific deployment
case "{cloud_provider}" in
  "aws")
    aws s3 sync dist/ s3://{bucket_name}
    aws cloudfront create-invalidation --distribution-id {distribution_id} --paths "/*"
    ;;
  "gcp")
    gcloud app deploy --project={project_id}
    ;;
  "azure")
    az webapp deployment source config-zip --resource-group {resource_group} --name {app_name} --src deploy.zip
    ;;
esac
```

## 🗄️ Database Migration

### Run Migrations
```bash
# Execute database migrations
echo "🗄️ Running database migrations..."

if [ "{environment}" = "staging" ]; then
  # Staging database
  DATABASE_URL=$STAGING_DATABASE_URL npm run migrate
elif [ "{environment}" = "production" ]; then
  # Production database (with backup first)
  echo "🔄 Creating database backup..."
  pg_dump $PRODUCTION_DATABASE_URL > backup_$(date +%Y%m%d_%H%M%S).sql
  
  DATABASE_URL=$PRODUCTION_DATABASE_URL npm run migrate
fi

echo "✅ Database migrations completed"
```

## 🔍 Health Checks

### Application Health Verification
```bash
# Wait for application to be ready
echo "🔍 Performing health checks..."

HEALTH_URL="https://{app_url}/api/health"
MAX_ATTEMPTS=30
ATTEMPT=1

while [ $ATTEMPT -le $MAX_ATTEMPTS ]; do
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $HEALTH_URL)
  
  if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Application is healthy (attempt $ATTEMPT)"
    break
  fi
  
  echo "⏳ Waiting for application... (attempt $ATTEMPT/$MAX_ATTEMPTS)"
  sleep 10
  ATTEMPT=$((ATTEMPT + 1))
done

if [ $ATTEMPT -gt $MAX_ATTEMPTS ]; then
  echo "❌ Application failed to become healthy"
  exit 1
fi
```

### Service Dependencies Check
```bash
# Verify external services
echo "🔗 Checking service dependencies..."

# Database connectivity
curl -f "$HEALTH_URL/db" || { echo "❌ Database connection failed"; exit 1; }

# External APIs
curl -f "$HEALTH_URL/external" || { echo "❌ External services unavailable"; exit 1; }

echo "✅ All dependencies healthy"
```

## 📊 Deployment Metrics

### Performance Validation
```bash
# Performance testing
echo "📊 Running performance tests..."

# Load testing with basic metrics
curl -w "Connect: %{time_connect} TTFB: %{time_starttransfer} Total: %{time_total}\n" \
     -o /dev/null -s "$HEALTH_URL"

# Verify response times
RESPONSE_TIME=$(curl -w "%{time_total}" -o /dev/null -s "$HEALTH_URL")
if (( $(echo "$RESPONSE_TIME > 2.0" | bc -l) )); then
  echo "⚠️ Response time too slow: ${RESPONSE_TIME}s"
else
  echo "✅ Response time acceptable: ${RESPONSE_TIME}s"
fi
```

## 🏷️ Release Tagging

### Git Tagging
```bash
# Create release tag
echo "🏷️ Creating release tag..."

TAG_NAME="{environment}-{version}-$(date +%Y%m%d)"
git tag -a $TAG_NAME -m "Deploy {version} to {environment} on {current_date}"
git push origin $TAG_NAME

echo "✅ Release tagged: $TAG_NAME"
```

### Release Notes
```bash
# Generate release notes
echo "📝 Generating release notes..."

cat > release-notes-$TAG_NAME.md << EOF
# Release: $TAG_NAME

## 🚀 Deployment Summary
- **Environment**: {environment}
- **Version**: {version}
- **Date**: {current_date}
- **Deployment ID**: {deployment_id}

## ✅ Quality Gates
- Tests: Passed
- Coverage: >80%
- Linting: Clean
- Security: No critical issues
- Performance: <2s response time

## 🔗 Links
- Application: $HEALTH_URL
- Monitoring: {monitoring_url}
- Logs: {logs_url}

## 📊 Metrics
- Build Time: {build_time}
- Deploy Time: {deploy_time}
- Health Check: ✅ Passed
EOF

echo "✅ Release notes created: release-notes-$TAG_NAME.md"
```

## 🔙 Rollback Plan

### Automated Rollback
```bash
# Rollback function
rollback_deployment() {
  echo "🔙 Initiating rollback..."
  
  PREVIOUS_TAG=$(git describe --tags --abbrev=0 HEAD~1)
  echo "Rolling back to: $PREVIOUS_TAG"
  
  # Rollback based on platform
  case "{deployment_platform}" in
    "docker")
      docker-compose down
      docker pull {project_name}:$PREVIOUS_TAG
      docker-compose up -d
      ;;
    "vercel")
      vercel rollback $PREVIOUS_TAG
      ;;
    "kubernetes")
      kubectl rollout undo deployment/{project_name}
      ;;
  esac
  
  echo "✅ Rollback completed to $PREVIOUS_TAG"
}

# Trigger rollback if health checks fail
if [ "$DEPLOYMENT_FAILED" = "true" ]; then
  rollback_deployment
fi
```

## 📢 Notifications

### Team Notification
```bash
# Notify team of deployment
echo "📢 Sending deployment notifications..."

# Slack notification (if configured)
if [ -n "$SLACK_WEBHOOK" ]; then
  curl -X POST -H 'Content-type: application/json' \
    --data "{\"text\":\"🚀 Deployment to {environment} completed!\n• Version: {version}\n• Status: ✅ Success\n• URL: $HEALTH_URL\"}" \
    $SLACK_WEBHOOK
fi

# Email notification (if configured)
if [ -n "$NOTIFICATION_EMAIL" ]; then
  echo "Deployment {version} to {environment} completed successfully" | \
    mail -s "Deployment Success: {project_name}" $NOTIFICATION_EMAIL
fi
```

## 📊 Deployment Summary

### Final Status Report
```json
{
  "deployment_id": "{deployment_id}",
  "environment": "{environment}",
  "version": "{version}",
  "status": "success",
  "timestamp": "{current_date}",
  "metrics": {
    "build_time": "{build_time}",
    "deploy_time": "{deploy_time}",
    "health_check": "passed",
    "response_time": "{response_time}ms"
  },
  "quality_gates": {
    "tests": "passed",
    "linting": "passed", 
    "coverage": ">80%",
    "security": "passed"
  },
  "urls": {
    "application": "{app_url}",
    "health": "{health_url}",
    "monitoring": "{monitoring_url}"
  }
}
```

## ✅ Post-Deployment Actions

### Monitoring Setup
- [ ] **Verify monitoring alerts** are active
- [ ] **Check error tracking** (Sentry) is working
- [ ] **Confirm logging** is properly configured
- [ ] **Test backup systems** are operational

### Documentation Updates  
- [ ] **Update deployment docs** with any changes
- [ ] **Record lessons learned** for next deployment
- [ ] **Update runbooks** if procedures changed
- [ ] **Share success metrics** with team

---

## 🎯 Deployment Complete

**Status**: ✅ Successfully deployed {version} to {environment}
**URL**: {deployment_url}
**Next**: Monitor application health and performance

### Gate 5 Validation Checklist
- [ ] Application deployed successfully
- [ ] All quality gates passed
- [ ] Health checks verified
- [ ] Performance metrics acceptable
- [ ] Monitoring and alerts active
- [ ] Release tagged and documented
- [ ] Team notified of deployment
- [ ] Rollback plan tested and ready

**Ready for**: `claude-code "/monitor {environment}-health-check"`