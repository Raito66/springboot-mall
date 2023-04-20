package demo1;

public class Demo1 {

	public static void main(String[] args) {
		
		String str = new String("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z");
		 
        String [] stringArray = str.split(",");
                for(int i = 0; i < stringArray.length; i++) {
        			System.out.print(stringArray[i] + "1");
        		System.out.print("\n");      		
        		}
        }
        
        
 }
