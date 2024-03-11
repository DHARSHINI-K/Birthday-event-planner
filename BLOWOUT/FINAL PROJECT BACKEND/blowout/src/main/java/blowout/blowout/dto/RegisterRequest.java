package blowout.blowout.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegisterRequest {
    private String email;
    private String password;
    private String name;
    private long mobileNumber;
    private String userRole;
   
}