
export const sendOtpEmailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<style type="text/css">
 
@media screen {
@font-face {
font-family: 'Lato';
font-style: normal;
font-weight: 400;
src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
}
@font-face {
font-family: 'Lato';
font-style: normal;
font-weight: 700;
src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
}
@font-face {
font-family: 'Lato';
font-style: italic;
font-weight: 400;
src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
}
@font-face {
font-family: 'Lato';
font-style: italic;
font-weight: 700;
src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
}
}
 
body,
table,
td,
a {
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
}
table,
td {
mso-table-lspace: 0pt;
mso-table-rspace: 0pt;
}
img {
-ms-interpolation-mode: bicubic;
}
 
img {
border: 0;
height: auto;
line-height: 100%;
outline: none;
text-decoration: none;
}
table {
border-collapse: collapse !important;
}
body {
height: 100% !important;
margin: 0 !important;
padding: 0 !important;
width: 100% !important;
}
 
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important;
}
 
@media screen and (max-width:600px) {
h1 {
font-size: 32px !important;
line-height: 32px !important;
}
}
 
div[style*="margin: 15px 0;"] {
margin: 0 !important;
}
</style>
 
</head>
<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
<div class="litmus-builder-preview-text" style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">Welcome back! Verify your email and continue your family.one journey.­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  ­͏‌  &#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;&#847;&zwnj;&nbsp;&#8199;&shy;</div>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr>
<td bgcolor="#f4f4f4" align="center" style="background-color: #f4f4f4;">
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
<tr>
<td align="center" valign="top" style="padding: 20px 10px 10px 10px;">
<a href="https://f7l8s6qf.r.us-east-1.awstrack.me/L0/https:%2F%2Fapp2.family.one%2F/1/020000007u0qdom5-9ifp53cf-v3gj-if4g-ir41-opm4m3qm2t80-000000/0KsSetMoc2NcdviRKBz3RTMJLfA=380" target="_blank">
<img alt="Logo" src="https://app2.family.one/images/emailImages/familyone_logo_black.png" width="40"
height="9"
style="display: block; width:50%; max-width: 120px; min-width: 80px; font-family: 'Lato', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 1"
border="0" />
</a>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td bgcolor="#f4f4f4" align="center" style="padding: 10px 10px 0px 10px;background-color: #f4f4f4;">
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
<tr>
<td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 30px 20px 30px;border-radius: 20px 20px 0px 0px;color: #111111;font-family: 'Lato', Helvetica, Arial, sans-serif;font-size: 36px;font-weight: 400;letter-spacing: 4px;line-height: 36px;background-color: #ffffff;">Welcome  to family.one</td>
</tr>
</table>
</td>
</tr>
<tr>
<td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;background-color: #f4f4f4;">
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
<tr>
</tr>
<tr>
<tr>
<td bgcolor="#ffffff" align="center" valign="top" style="padding:0 30px 10px;">
<a href="https://f7l8s6qf.r.us-east-1.awstrack.me/L0/https:%2F%2Ffmly.one%2F%23login_cam%3Faction=s_o_n%26email=ZmFtaWx5LjhlMjRAbGl0bXVzZW1haWwuY29t%26subid=47d9e2d7-aa03-4b23-9876-1007ca192cd0%26p_id=4680%26ec=newsletter_20240624_cst%26cl=enter_giveaway/1/020000007u0qdom5-9ifp53cf-v3gj-if4g-ir41-opm4m3qm2t80-000000/x6Nh_nD_u7Cro5l2iJm2lVbyqzE=380" target="_blank"</a>
</td>
</tr>
</tr>
<tr>
<td bgcolor="#ffffff" align="left" style="padding: 20px 50px 10px 50px;color: #666666;font-family: 'Lato', Helvetica, Arial, sans-serif;font-size: 16px;font-weight: 400;line-height: 22px;text-align: center;background-color: #ffffff;">Hi John, <br />Thank you for registering with family.one! Please use the following code to verify your email address:</td>
</tr>
<tr>
<td bgcolor="#ffffff" align="left" style="padding: 20px 50px 10px 50px;color: #666666;font-family: 'Lato', Helvetica, Arial, sans-serif;font-size: 24px;font-weight: 400;line-height: 22px;text-align: center;background-color: #ffffff;">123456</td>
</tr>
<tr>
</tr>
<tr>
<td bgcolor="#ffffff" align="left" style="padding: 20px 50px 10px 50px;color: #666666;font-family: 'Lato', Helvetica, Arial, sans-serif;font-size: 16px;font-weight: 400;line-height: 22px;text-align: center;background-color: #ffffff;">If you didn&rsquo;t sign up for a family.one account, feel free to ignore this message &mdash; no action is needed.</td>
</tr>
<tr>
<td bgcolor="#f4f4f4" align="left" >
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td bgcolor="#ffffff" align="center" style="padding: 20px 30px 40px 30px; border-radius: 0px 0px 30px 30px;">
<table role="presentation" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="center">
      <a href="https://example.com/login"
target="_blank" style="background-color: #F47C6A; border-radius: 30px; font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 65px; border: 0
px solid #ec6d64; display: inline-block;">Login</a>
</td>
</tr>
<tr>
<td bgcolor="#ffffff" align="left" style="padding: 20px 50px 10px 50px;color: #666666;font-family: 'Lato', Helvetica, Arial, sans-serif;font-size: 16px;font-weight: 400;line-height: 22px;text-align: center;background-color: #ffffff;">Alternatively, you can copy and paste the following link into your browser:<br /><br /><a style="word-break: break-all;" href="https://example.com/login">https://example.com/login</a></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
</tr>
<tr>
</tr>
</table>
</td>
</tr>
<tr>
<td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
<tr>
<td bgcolor="#f4f4f4" align="left"
style="padding: 10px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 18px;">
<p style="margin: 0;">You received this email because you signed up for family.one. If you'd like to manage the types of communications you receive from family.one, or to unsubscribe, you can do so by clicking&nbsp;<a style="color: #111111; font-weight: bold;" href="#" target="_blank" rel="noopener">unsubscribe</a>.</p>
</td>
</tr>
<tr>
<td bgcolor="#f4f4f4" align="left"
style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 18px;">
<p style="margin: 0;">Copyright &copy; 2025 family.one&nbsp;All rights reserved. 6D - 7398 Yonge St Unit # 656&nbsp; Thornhill, ON L4J 8J2</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
