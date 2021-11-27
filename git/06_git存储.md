### git存储
    git stash 
        将未完成的修改保存到一个栈上
    git stash list
        查看存储
    git stash apply
        切回原分支
        应用栈顶存储
    git stash drop
        删除栈顶的内容
    git stash pop 
        应用储藏然后立即从栈上扔掉它
        = git stash apply + git stash drop

    无法通过git log --oneline 和 git reflog 查看记录  