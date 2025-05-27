import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Cherry", "Date");
        Collections.sort(list, (a, b) -> a.compareTo(b));
        System.out.println("Sorted list: " + list);
    }
}
