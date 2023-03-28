module.exports = async (
    {markdownAST},
    pluginOption,
) => {
    console.log('plugin run');
    console.log(pluginOption);
    return markdownAST;
};
