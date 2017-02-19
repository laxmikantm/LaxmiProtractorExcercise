describe('CRUD Operations-Laxmi', function() {
	var homepageUrl= 'http://computer-database.herokuapp.com/computers';
	var addNewCompBtn = element(by.id('add'));
	var d = new Date();
	var testRecordName = '1234Laxmi';
	var newRecordName= testRecordName+d.getMinutes()+d.getSeconds();
	var computerName = element(by.id('name'));
	var introducedDate = element(by.id('introduced'));
	var disContinuedDate = element(by.id('discontinued'));
	var company = element(by.cssContainingText('option', 'RCA'));
	var companyAmendment = element(by.cssContainingText('option', 'MOS Technology'));
	var saveBtn = $('.btn.primary');
	var doneText = $('.alert-message.warning');
	var homepageLink = $('a[href="/"]');
	var searchBox = element(by.id('searchbox'));
	var filterByName = element(by.id('searchsubmit'));
	var resultTableCell1= element(by.xpath('//table[contains(@class,"computers zebra-striped")]/tbody/tr/td[1]/a'));
	var resultTableCell4= element(by.xpath('//table[contains(@class,"computers zebra-striped")]/tbody/tr/td[4]'));
	var deleteBtn = $('.btn.danger[type=submit]');
	
	beforeAll(function() {
		browser.ignoreSynchronization = true;
		browser.get(homepageUrl);
    });
	
	afterAll(function() {
		browser.ignoreSynchronization = false;
	});

  it('should have correct homepage title', function() {
	  'use strict;'

    expect(browser.getTitle()).toContain('Computers database');
  });
  //Create & verify
  it('should be able to add new record', function() {
	  browser.get(homepageUrl);
	  addNewCompBtn.click();
	  computerName.sendKeys(newRecordName);
	  introducedDate.sendKeys('2017-01-01');
	  disContinuedDate.sendKeys('2017-12-30');
	  company.click();
	  saveBtn.click();
	  expect(doneText.getText()).toContain(testRecordName);	  
  });
  //Search
  it('should be able to search the newly added record', function() {
	  homepageLink.click(); // or We can use browser.get(homepageUrl);
	  searchBox.sendKeys(newRecordName);
	  filterByName.click();
	  expect(resultTableCell1.getText()).toContain(newRecordName);  
  });
  
  //Update
  it('should be able to amend the record', function() {
	  homepageLink.click(); // or We can use browser.get(homepageUrl);
	  searchBox.sendKeys(newRecordName);
	  filterByName.click();
	  resultTableCell1.click();
	  companyAmendment.click();
	  saveBtn.click();
	  
	  searchBox.sendKeys(newRecordName);
	  filterByName.click();
	  expect(resultTableCell4.getText()).toContain('MOS Technology');  
  });
  
    //Delete
  it('should be able to delete the record', function() {
	  homepageLink.click(); // or We can use browser.get(homepageUrl);
	  searchBox.sendKeys(newRecordName);
	  filterByName.click();
	  resultTableCell1.click();
	  deleteBtn.click();
	  expect(doneText.getText()).toContain('Computer has been deleted');	
  });
  
});