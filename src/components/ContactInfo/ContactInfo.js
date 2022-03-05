import {TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const ContactInfo = props => {
  return (
    <TableContainer>
      <TableBody>
        <TableRow>
          <TableCell>
            <MyLocationOutlinedIcon/>
          </TableCell>
          <TableCell>
            Yerevan, Armenia
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <EmailOutlinedIcon/>
          </TableCell>
          <TableCell>
            tig.vardanyan.001@gmail.com
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <PhoneEnabledOutlinedIcon/>
          </TableCell>
          <TableCell>
            +374 77 720 166
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <CheckOutlinedIcon/>
          </TableCell>
          <TableCell>
            Freelance Available
          </TableCell>
        </TableRow>
      </TableBody>
    </TableContainer>
  )
}

export default ContactInfo