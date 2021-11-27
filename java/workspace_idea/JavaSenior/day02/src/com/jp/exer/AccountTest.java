package com.jp.exer;

/*
*   银行有一个账户
*      有两个储户向同一个账户存3000元,每次存1000,存3次每次打印账户余额
* */
class Account {
    private int balance;

    public Account(int balance){
        this.balance = balance;
    }

    public synchronized void deposit(int money) {
        this.balance += money;
        System.out.println("当前余额为: " + this.balance + "; 当前线程为" + Thread.currentThread().getName());
    }
}

class Customer implements Runnable {
    private Account account;

    public Customer(Account account) {
        this.account = account;
    }


    @Override
    public void run() {
        for (int i = 0; i < 3; i++) {
            account.deposit(1000);
        }
    }
}

public class AccountTest {
    public static void main(String[] args) {
        Account account = new Account(0);
        Customer customer = new Customer(account);
        Thread t1 = new Thread(customer);
        Thread t2 = new Thread(customer);

        t1.start();
        t2.start();
    }
}





