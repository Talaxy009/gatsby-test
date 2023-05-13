const visit = require('unist-util-visit');

module.exports = async (
    {markdownAST}
) => {
    visit(markdownAST, 'link', (node) => {
        node.type = 'html';
        node.value = '<div>test</div>';
        node.children = [];
    });
    return markdownAST;
};
