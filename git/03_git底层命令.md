### 底层命令
    git对象
        git hash-object -w fileUrl 
            生成一个key(hash值):val(压缩后的文件内容)存到.git/objects
    tree对象
        git update-index
            
    commit对象

    三个对象通用命令
        git cat-file -p 
        git cat-file -t 