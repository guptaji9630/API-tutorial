import java.util.Scanner;
public class h {
    public static void main(String[] args){

        System.out.println("Enter your age ");
         Scanner sc = new Scanner(System.in);
        int  aSide = sc.nextInt();
        int A =  aSide + 55;
        System.out.PrintStream.println("you age after hybernation= ",A);
        if(A==100){
            System.out.println("you are eligibale to survive on mars");
        }
        else {
            System.out.println("Sorry you need to stay on earth");
        }
    }
    
}
