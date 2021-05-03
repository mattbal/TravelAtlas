// Creates a connection to the SQL database on Azure that stores member, trip, deals, and activity login
// Runs an emulator that opens the database when the button is pushed
// must download first: https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15
// then add JDBC drivers: https://stackoverflow.com/questions/24784871/how-to-mysql-jdbc-driver-to-android-studio

package com.example.databasetest;


import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.View;

import android.view.Menu;
import android.view.MenuItem;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            // read in data from SQL database
            public void onClick(View view) {
                String url = "jdbc:sqlserver://travelatlasfor322.database.windows.net:1433;database=TravelAtlasMS;user=TravelAtlas@travelatlasfor322;password=Password123;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";
                try {
                    java.sql.Connection connection = java.sql.DriverManager.getConnection(url.toString());

                    PreparedStatement readStatement = connection.prepareStatement("SELECT * FROM [dbo].[members];");
                    ResultSet resultSet = readStatement.executeQuery();
                }
                catch(Exception e) {
                    //  Block of code to handle errors
                }
               /* Statement statement = connection.createStatement();
                while (scanner.hasNextLine()) {
                    statement.execute(scanner.nextLine());
                }*/

                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}