import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 96528,
  name: 'gkd-subscription',
  version: 0,
  author: 'zjp',
  checkUpdateUrl: 'https://github.com/zjp18538666496/ad/gkd.json5',
  supportUri: '',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
