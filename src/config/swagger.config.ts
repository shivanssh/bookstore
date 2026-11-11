import YAML from 'yaml';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';

const openapiPath = join(process.cwd(), 'docs', 'openapi.yaml');

export const swaggerSpec = YAML.parse(readFileSync(openapiPath, 'utf8'));
