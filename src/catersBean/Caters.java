package catersBean;

import java.util.List;

public class Caters {
	private String catersName;
	private List<String> locationsServed;
	private List<String> cusineList;
	private PhoneNo phoneNo;
	public PhoneNo getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(PhoneNo phoneNo) {
		this.phoneNo = phoneNo;
	}
	private Address address;
	public String getCatersName() {
		return catersName;
	}
	public void setCatersName(String catersName) {
		this.catersName = catersName;
	}
	public List<String> getLocationsServed() {
		return locationsServed;
	}
	public void setLocationsServed(List<String> locationsServed) {
		this.locationsServed = locationsServed;
	}
	public List<String> getCusineList() {
		return cusineList;
	}
	public void setCusineList(List<String> cusineList) {
		this.cusineList = cusineList;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
}
