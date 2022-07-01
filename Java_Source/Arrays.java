
public class Arrays {
    public static void main(String[] args) {
        int[] arr;
       // int arr2[];
        arr= new int[10];
        // System.out.println(arr[5]);
        double[] arr3= new double[10];
        // System.out.println(arr3[0]);
        boolean[] arr4= new boolean[10];
        // System.out.println(arr4[0]);

        int[] arr5= {3,2,1};
       /*  [][] are symbol of multidimensional array to print the you need to specify the row no and column no */

        int[][] matrix = {
            {1,2,3},
            {4,5,6}
        };

            // System.out.println(matrix[1][2]);

            // now this also a type of 2d array you can write like this 
             int[][] matrix2 = new int[10][];
             System.out.println(matrix2[5]);

             // with this method you can print an array to console

             for (int element: arr5){
               //  System.out.println(element);
             }
             Arrays.sort(arr5);
             for(int element1 : arr5){
                System.out.println(element1);   
             }
             
        }

    private static void sort(int[] arr5) {
    }
        
    }
