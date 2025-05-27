class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class AgeCheck {
    public static void main(String[] args) {
        int age = 16;
        try {
            if (age < 18) {
                throw new InvalidAgeException("Age must be at least 18.");
            }
            System.out.println("You are eligible.");
        } catch (InvalidAgeException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
