import java.util.ArrayList;
import java.util.Scanner;

public class Arraylist {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<>();

        System.out.println("Enter student names (type 'exit' to stop):");
        while (true) {
            String name = sc.nextLine();
            if (name.equalsIgnoreCase("exit")) break;
            students.add(name);
        }

        System.out.println("Students:");
        for (String name : students) {
            System.out.println(name);
        }
    }
}
