import java.util.Random;
import java.util.Scanner;

public class NumberGuess {
    public static void main(String[] args) {
        Random rand = new Random();
        Scanner sc = new Scanner(System.in);

        int number = rand.nextInt(100) + 1;
        int guess = 0;

        while (guess != number) {
            System.out.print("Guess the number (1-100): ");
            guess = sc.nextInt();

            if (guess < number)
                System.out.println("Too low!");
            else if (guess > number)
                System.out.println("Too high!");
            else
                System.out.println("Correct!");
        }
    }
}
