/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package preview;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.*;
import java.time.Clock;
import java.time.ZoneId;
import java.util.Scanner;


/**
 *
 * @author harri
 */
public class PreVIEW {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
            try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        
    }catch (ClassNotFoundException e){
        System.out.println(e);
    }
    
    final String ID = "admin";
    final String PW = "11oveCookie$";
    final String SERVER = "jdbc:mysql://studentdatabase.c7whb4kqcku6.us-east-1.rds.amazonaws.com:3306/mywebapp";
    Scanner input = new Scanner(System.in);
    String querys;
    try {
        Connection con = DriverManager.getConnection(SERVER, ID, PW);
        Statement stmt = con.createStatement();
        System.out.println("What is the genre?");
        String genre = input.next();
        ResultSet rs = stmt.executeQuery("SELECT round(avg(allrating), 1) as allrating, round(avg(mrating), 1) as mrating, round(avg(frating), 1) as frating FROM mywebapp.movies where genre = '" + genre + "' ;");
        //PreparedStatement updateStaff = null;
       String format = "%s\t\t\t| %s\t\t\t| %s";
       System.out.println(String.format(format, "All", "Men", "Women"));
        
        while (rs.next()){
            String allrating = rs.getString("allrating");
            String mrating = rs.getString("mrating");
            String frating = rs.getString("frating");
            System.out.println(String.format(format, allrating+"", mrating+"", frating));
            //System.out.println(allrating+", "+mrating+", "+frating);
           //System.out.println(bNo+", "+street+", "+city+", "+ postcode);
           // System.out.println(String.format(format, id+"", age+"", first, last));
            
            
        }
       // querys = "UPDATE shongdb.Branch SET city = 'Baltimore' WHERE branchNo = 'B002';";
       // updateStaff = con.prepareStatement(querys);
       // updateStaff.executeUpdate();
    }catch (SQLException e){
        System.err.println(e);
    }
    }//Main
    
}

    
    

