import { composePlugins, withNx, withReact } from '@nx/rspack';

// Nx plugins for rspack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact()
);
