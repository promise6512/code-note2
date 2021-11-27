### 初始化命令
    git --version 查看git版本
    git config --global user.name 'hjp'       设置用户名
    git config --global user.email 2523863783 设置邮箱
    git config --list   查看配置信息
    --system 配置用于整个操作系统
    --global 配置用于当前用户
    省略     配置用于当前项目

### 区域
    工作区
    暂存区
    版本库

### 对象  
    Git对象
        key:val 组成的键值对(key是val对应的hash)
                键值对在git内部是一个blob类型
        代表文件的一次次版本       
    树对象
        项目的快照
    提交对象  
        对树对象进行封装
        代表项目的一次次版本
        版本回滚寻找提交对象对应的哈希

### git操作基本流程
    创建工作目录 对工作目录进行修改
    git add ./(路径) 
        生成git对象 将git对象推入暂存区
        相当于 
              git hash-object -w 文件名 -->生成git对象
            + git update-index  -->将git对象推入暂存区
    git commit -m '注释内容'
        生成树对象和提交对象
        相对于 
              git write-tree  -->生成树对象
            + git commit-tree -->生成提交对象  

