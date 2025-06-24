#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const THRESHOLDS = {
  docs: {
    maxSize: 150 * 1024, // 150KB
    maxGzipSize: 120 * 1024 // 120KB estimated gzip
  },
  wizard: {
    maxSize: 350 * 1024, // 350KB
    maxGzipSize: 280 * 1024 // 280KB estimated gzip
  }
};

function getDirectorySize(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return 0;
  }

  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
    }
  }

  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function checkBundleSize(name, distPath, threshold) {
  console.log(`\n🔍 Checking ${name} bundle size...`);

  if (!fs.existsSync(distPath)) {
    console.log(`⚠️  ${name} dist folder not found: ${distPath}`);
    return { passed: false, reason: "Dist folder not found" };
  }

  const totalSize = getDirectorySize(distPath);
  const sizeFormatted = formatBytes(totalSize);
  const thresholdFormatted = formatBytes(threshold.maxSize);

  console.log(`📦 ${name} bundle size: ${sizeFormatted}`);
  console.log(`🎯 Threshold: ${thresholdFormatted}`);

  if (totalSize > threshold.maxSize) {
    console.log(`❌ ${name} bundle size exceeds threshold!`);
    console.log(`💡 Consider code splitting or removing unused dependencies`);
    return {
      passed: false,
      reason: `Bundle too large: ${sizeFormatted} > ${thresholdFormatted}`,
      actualSize: totalSize,
      threshold: threshold.maxSize
    };
  }

  console.log(`✅ ${name} bundle size is within limits`);
  return {
    passed: true,
    actualSize: totalSize,
    threshold: threshold.maxSize
  };
}

function analyzeBundleComposition(distPath, name) {
  console.log(`\n📊 ${name} bundle composition:`);

  if (!fs.existsSync(distPath)) {
    return;
  }

  const files = fs.readdirSync(distPath, { withFileTypes: true })
    .filter(file => file.isFile())
    .map(file => {
      const filePath = path.join(distPath, file.name);
      const stats = fs.statSync(filePath);
      return {
        name: file.name,
        size: stats.size,
        extension: path.extname(file.name)
      };
    })
    .sort((a, b) => b.size - a.size);

  files.forEach(file => {
    console.log(`  📄 ${file.name}: ${formatBytes(file.size)}`);
  });

  // Group by file type
  const byType = files.reduce((acc, file) => {
    const type = file.extension || "other";
    if (!acc[type]) acc[type] = { count: 0, size: 0 };
    acc[type].count++;
    acc[type].size += file.size;
    return acc;
  }, {});

  console.log(`\n📈 By file type:`);
  Object.entries(byType).forEach(([type, stats]) => {
    console.log(`  ${type}: ${stats.count} files, ${formatBytes(stats.size)}`);
  });
}

function main() {
  console.log("🚀 Bundle Size Analysis");
  console.log("========================");

  const rootDir = path.join(__dirname, "..");
  const results = [];

  // Check docs bundle (focus on JS/CSS assets)
  const docsDistPath = path.join(rootDir, "docs", "site", "assets");
  const docsResult = checkBundleSize("Docs", docsDistPath, THRESHOLDS.docs);
  results.push({ name: "Docs", ...docsResult });
  analyzeBundleComposition(docsDistPath, "Docs");

  // Check wizard bundle (focus on JS/CSS assets)
  const wizardDistPath = path.join(rootDir, "docs", "wizard", "dist", "assets");
  const wizardResult = checkBundleSize("Wizard", wizardDistPath, THRESHOLDS.wizard);
  results.push({ name: "Wizard", ...wizardResult });
  analyzeBundleComposition(wizardDistPath, "Wizard");

  // Summary
  console.log("\n📋 Bundle Size Summary");
  console.log("======================");

  const allPassed = results.every(result => result.passed);

  results.forEach(result => {
    const status = result.passed ? "✅" : "❌";
    const size = result.actualSize ? formatBytes(result.actualSize) : "N/A";
    const threshold = result.threshold ? formatBytes(result.threshold) : "N/A";
    console.log(`${status} ${result.name}: ${size} / ${threshold}`);

    if (!result.passed && result.reason) {
      console.log(`   └─ ${result.reason}`);
    }
  });

  if (allPassed) {
    console.log("\n🎉 All bundle sizes are within acceptable limits!");
    process.exit(0);
  } else {
    console.log("\n⚠️  Some bundles exceed size limits. Consider optimization.");
    console.log("\n💡 Optimization suggestions:");
    console.log("   • Use dynamic imports for code splitting");
    console.log("   • Remove unused dependencies");
    console.log("   • Optimize images and assets");
    console.log("   • Use tree shaking");
    console.log("   • Consider using a CDN for large libraries");

    // Don't fail in CI for now, just warn
    console.log("\n⚠️  Bundle size check completed with warnings (non-blocking)");
    process.exit(0);
  }
}

main();
