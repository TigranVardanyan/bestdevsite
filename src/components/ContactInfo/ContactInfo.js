import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const ContactInfo = props => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <MyLocationOutlinedIcon sx={{color: "var(--theme-color)"}}/>
            </TableCell>
            <TableCell>
              Yerevan, Armenia
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <EmailOutlinedIcon sx={{color: "var(--theme-color)"}}/>
            </TableCell>
            <TableCell>
              tig.vardanyan.001@gmail.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <PhoneEnabledOutlinedIcon sx={{color: "var(--theme-color)"}}/>
            </TableCell>
            <TableCell>
              +374 77 720 166
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <CheckOutlinedIcon sx={{color: "var(--theme-color)"}}/>
            </TableCell>
            <TableCell>
              Freelance Available
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ContactInfo