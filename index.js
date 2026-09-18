function parseEnv(content) {
  const result = {};
  const lines = content.split('\n');
  for (const line of lines) {
    let trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    // Strip leading 'export ' prefix for sourceable env files
    if (trimmed.startsWith('export ')) {
      trimmed = trimmed.substring(7);
    }
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.substring(0, eqIdx).trim();
    const value = trimmed.substring(eqIdx + 1).trim();
    result[key] = value;
  }
  return result;
}
module.exports = { parseEnv };
