package catersAPI.com;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

import catersBean.User;

@Path("/Caters")
public class CatersAPI {
	@GET
	@Path("/getUsers")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getMsg() {
		Gson gson=new Gson();
		User user=new User("Varun", 22);
		String s1=gson.toJson(user);
		return Response.ok(s1).build();

	}
}
