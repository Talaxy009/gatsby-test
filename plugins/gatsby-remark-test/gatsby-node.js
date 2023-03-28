exports.pluginOptionsSchema = ({Joi}) => {
    console.log('test');
    return Joi.object({
        test: Joi.string()
            .default('Can you see me?')
            .description('Test string'),
    });
};

exports.onPluginInit = () => {
    console.log('plugin init');
}
