package com.server.backend.addFunctionality;

public class IDGenerate {

    public static long idGenerate(){

        return System.currentTimeMillis() + (long)(Math.random() * 1001);
    }
}
