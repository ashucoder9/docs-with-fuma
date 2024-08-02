import { generateFiles } from 'fumadocs-openapi';
 
void generateFiles({
  input: ['./scripts/*.json'],
  output: './content/docs/api-reference/playground',
});