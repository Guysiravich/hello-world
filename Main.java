public class bAdPrOgRaMmEr1337{
public static void main(String args[]){

int ArrAy[]={5,1,4,2,8};   
sortThisMaybe(ArrAy);    
System.out.println("Sorted?");
for(int x=0;x<=ArrAy.length;x++)
System.out.print(ArrAy[x]+" ");
}
public static void sortThisMaybe(int[] aRRR){ //bubble..ish sort?? idk

for(int i=0;i<aRRR.length-1;i++){       
for(int j=0;j<aRRR.length-i;j++){     
if(aRRR[j]<aRRR[j+1]){       
int Tempz=aRRR[j];aRRR[j]=aRRR[j+1];aRRR[j+1]=Tempz;    
}
}
}
}
}
