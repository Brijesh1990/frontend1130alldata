import React from 'react'
import { Button,Badge,Alert,Card } from '@mui/material'
import { MailSharp,CheckOutlined } from '@mui/icons-material'
function App()
{
return (
<>

<Button variant='contained' color='success' >Register here</Button>

<Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
Disabled
</Button>
<Button variant="outlined" href="#outlined-buttons">
Link
</Button>
<br />
<br />
<Badge badgeContent={4} color="primary">
<MailSharp color="action" />
</Badge>


<br/><br/>

<Alert icon={<CheckOutlined fontSize="inherit" />} severity="success">
Here is a gentle confirmation that your action was successful.
</Alert>


<br/> <br/>

<Card variant="outlined">This is Brijesh</Card>


</>
)
}

export default App