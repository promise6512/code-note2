### linux命令
    git cat-file -t c7b77c9526dc17f33584c8c1b68345f05b5e0dee
        查看对象类型
    git cat-file -p c7b77c9526dc17f33584c8c1b68345f05b5e0dee
        查看对象内容
    vim 文件名
        进入文件
    rm  文件名
        删除文件
    mv 源文件 重命名文件
        文件重命名
    ll 将当前目录下的 子文件&子目录平铺在控制台

### git低层命令
    git ls-files -s 查看暂存区内容

### git高层命令
    git init   初始化仓库
    git add ./ 将修改添加到暂存区
            ./ 表示当前目录下所有文件
            也可以直接指定文件名 如test.txt
            add可以将未追踪状态的文件变为追踪状态
    git commit -m '注释'  将暂存区提交到版本库
    git commit
            提交暂存区
            这种方式会启动文本编辑器以便输入本次提交的说明
    git commit -a -m "注释"
            跳过暂存区提交
            只能对已经跟踪的文件使用
    git commit -a
            跳过暂存区提交
            这种方式会启动文本编辑器以便输入本次提交的说明
            只能对已经跟踪的文件使用
    git stutus  查看文件的状态
    git diff    查看哪些修改还没有暂存
    git diff --cached or git diff --staged
        查看有哪些更新已经暂存起来准备好了下次提交
    git log 查看历史记录/日志
    git log --pretty=oneline 日志出现在一行
    git log 简略版日
        日志以提交对象的形式显示
    git rm 文件名
        删除文件并提交到暂存区
        相对于 rm + git add
    git mv 原文件名 新文件名
        重命名文件并提交到暂存区
        相对于 mv + git add