### 高层命令(分支)
    git branch 
        显示分支列表
    git branch --merged
        查看合并到当前分支的分支
        出现在这个列表中的分支应当被删除
    git branch --no-merged
        查看没有合并到当前分支的分支列表
        出现在这个列表中的分支应该考虑是否要合并他们
    git branch 分支名 
        创建分支
    git branch 分支名 hash
        创建分支并指向指定hash的提交对象
    git branch -d 分支名
        删除空的分支/已合并的分支
    git branch -D 分支名
        删除分支
    git checkout 分支名
        切换分支
    git checkout -b 分支名
        创建分支并切换分支 
        相当于 git branch iss53
              +git checkout iss53
    git branch 分支名 commitHash
        版本穿梭(时光机)
        在指定的提交对象上创建分支
    git merge 分支名
        当前分支和并到指定分支
### 切换分支
    切换分支的最佳时间:每次切换分支前，当前分支必须处于已提交状态
    坑：
       切换分支时，如果当前分支有未暂存的修改(第一次)或者有未提交的暂存(第一次)
       此时分支可以切换成功 但是这种操作可能会污染其他分支
    会影响三个地方
       HEAD
       暂存区
       工作目录
### 关于分支的理解
    分支的本质是提交对象
        在git文件夹中的表现形式为一个没有后缀的文件，文件内保存着提交对象的hash
    HEAD 是一个指针，默认指向master分支 切换分支时其实就是让HEAD指向不同的分支，
        在git文件夹中的表现形式为一个名为HEAD的没有后缀的文件，文件内保存着分支文件的路径