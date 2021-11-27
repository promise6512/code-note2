class VariableTest {
	public static void main(String[] args){
		int myAge = 12;
		System.out.println(myAge);
		
		byte a = 1;
	    System.out.println(a);
		short b;
		b=234;
		System.out.println(b);
		
		float f1 = 1.23f;
		System.out.println(f1);
		
		char c1 = 'a';				
		System.out.print(c1);
		
		char c2 = '\n';
		System.out.print(c2);
		
		char c3 = '\u0043';
		System.out.println(c3);
		
		short s1 = 1;
		long l1 = s1 + c1;
		System.out.println(l1);
		
		double d1 = 12.9;
		int i1 = (int) d1;
		System.out.println(i1);
		
		int i2 = 1234; 
		byte b1 = (byte)i2;
		System.out.println(b1);					
	}
}
