package ch04.sec08;

public class ContinueExample {
	public static void main(String[] args) throws Exception {
		// i는 1부터 10까지 10번 반복
		for(int i=1; i<=10; i++) {
			// i를 2로 나누었을 때 나머지가 0과 같지 않으면
			// -> 홀수이면
			if(i%2 != 0) {
				continue;
				//System.out.print(i + " "); 에러
			}
			System.out.print(i + " ");
		}
	}
}