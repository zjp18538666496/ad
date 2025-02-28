import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 96528,
  name: 'gkd-subscription',
  version: 0,
  author: 'zjp',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
