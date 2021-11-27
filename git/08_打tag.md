### 打tag
    git tag
        列出所有的tag
    轻量标签:不带附注信息的标签
        git tag <tagName>
            在当前分支上打tag
        git tag <tagName> <commitHash> 
            在指定的提交对象上打tag
    附注标签:带有附注信息的标签
        git tag -a v1.4
        git tag -a v1.4 commitHash
        git tag -a v1.4 commitHash -m 'my version 1.4'    
    git show <tagName> 
        查看指定标签
    git tag -d <tagName>
        删除指定标签
    git checkout <tagName>
        检出标签 
        但是这可能会导致仓库处于分离头指针状态，即HEAD没有指向任何分支
        解决方法:
            使用git checkout -b <branchName> 创建新分支
        