package com.jp.java;

import java.lang.annotation.*;

import static java.lang.annotation.ElementType.*;

public @interface MyAnnotation {
    String value() default "hello";//default指定默认值
}
