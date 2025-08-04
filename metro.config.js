const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const srcPath = path.resolve(projectRoot, 'src');

const config = getDefaultConfig(projectRoot);

// Safely ensure sourceExts is defined and add TS extensions if not present
const { resolver } = config;

resolver.assetExts = resolver.assetExts || [];
resolver.sourceExts = Array.from(new Set([...(resolver.sourceExts || []), 'ts', 'tsx']));

resolver.extraNodeModules = {
  '@': srcPath,
};

config.watchFolders = [srcPath];

module.exports = config;