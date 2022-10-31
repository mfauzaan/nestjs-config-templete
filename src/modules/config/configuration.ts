process.env['NODE_CONFIG_DIR'] = __dirname;
import config from 'config';

export default () => config.util.toObject();
