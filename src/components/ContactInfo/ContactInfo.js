import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const ContactInfo = props => {
  const iconStyles = {color: "var(--theme-color)",cursor: 'pointer'}
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <MyLocationOutlinedIcon sx={iconStyles}/>
            </TableCell>
            <TableCell>
              Yerevan, Armenia
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <EmailOutlinedIcon sx={iconStyles}/>
            </TableCell>
            <TableCell>
              tig.vardanyan.001@gmail.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <PhoneEnabledOutlinedIcon sx={iconStyles}/>
            </TableCell>
            <TableCell>
              +374 77 720 166
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <CheckOutlinedIcon sx={iconStyles}/>
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