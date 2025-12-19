package ch06_클래스.ex05_메서드;

public class ComputerMain {

	public static void main(String[] args) {
		Computer myComputer = new Computer();
		
		int result1 = myComputer.sum(1, 2, 3);
		int result2 = myComputer.sum(1, 2, 3, 4, 5);
		
		System.out.println(result1);
		System.out.println(result2);
	}

}
