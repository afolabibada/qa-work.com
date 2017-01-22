package com.project.QAworks;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class test_step {
	
	private static final String ExpectedMessage = null;
	public WebDriver driver;
	public int random;
	

@Given("^I am on the QAWorks Site$")
public void i_am_on_the_QAWorks_Site() throws Throwable {
		System.setProperty("webdriver.chrome.driver","c:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://www.qaworks.com");
		driver.manage().window().maximize();			    
	}

	@Then("^I should be able to contact QAWorks with the following information$")
	public void i_should_be_able_to_contact_QAWorks_with_the_following_information(DataTable arg1) throws Throwable {
	    
		
		driver.findElement(By.linkText("Contact")).click();
		driver.findElement(By.id("ctl00_MainContent_NameBox")).sendKeys("j.Bloggs");
		driver.findElement(By.id("ctl00_MainContent_EmailBox")).sendKeys("j.Bloggs@qaworks.com");
		driver.findElement(By.id("ctl00_MainContent_MessageBox")).sendKeys("please contact me I want to find out more");
		
		
	}
		
}

	
	
