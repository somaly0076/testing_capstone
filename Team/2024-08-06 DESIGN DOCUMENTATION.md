---
title: DESIGN DOCUMENTATION
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-08-06
completed: null
---

# Screen Sizes

**Our app will feature a responsive design that seamlessly adapts to various screen sizes.** To optimize user experience, we will focus on two primary design layouts: tablet and mobile.

*We have adopted a design approach similar to Facebook's*, where the core design elements are consistent across mobile and desktop platforms. Consequently, our desktop view will be primarily based on the tablet layout. While our app is not specifically designed for ultra-wide screens, it will be compatible with them.

Mobile users can expect a stable and enjoyable experience, regardless of device specifications.



# Screen Ranges

$$
\large{
	\begin{matrix}
	   & 1440px
	   & \ge
	   & \text{Desktop + Tablet} 
	   & > 
	   & 1007px \\
	   
	   & 1007px  
	   & \ge 
	   & \text{Phone}
	   & >
	   & 0
	\end{matrix}
}
$$

# UI Screen (Figma)

$$
\large{
	\begin{matrix}
	   & \text{Desktop} 
	   & :
	   & 1440px \\
	   
	   & \text{Mobile}
	   & :
	   & 390px
	\end{matrix}
}
$$
# [[Typography]]


#### Primary Heading
---

| Name       | Code name | Value     |
| ---------- | --------- | --------- |
| Header 1   | h1        | 2.75 rem  |
| Header 1 ' | h1p       | 2.375 rem |

#### Secondary Heading
---

| Header 2 | h2  | 2 rem |
| -------- | --- | ----- |

#### Tertiary Heading
----

| Header 3 | h3        | 1.75 rem |
| -------- | --------- | -------- |
#### Quaternary Heading
---

| Header 4   | h4  | 1.4375 rem |
| ---------- | --- | ---------- |
| Header 4 ' | h4p | 1.3125 rem |

#### Quinary Heading
---

| Header 5 | h5  | 1.25 rem |
| -------- | --- | -------- |

#### Senary Heading
---

| Header 6 | h6  | 1.125 rem |
| -------- | --- | --------- |

#### Paragraph
---

| Paragraph   | p   | 1 rem    |
| ----------- | --- | -------- |
| Paragraph ' | pp  | 0.75 rem |

Base values

|         | Paragraph Base Value |
| ------- | -------------------- |
| Desktop | 16px                 |
| Mobile  | 14px                 |


# Layouts 

#### **Grids**

Desktop screens at maximum width, 1440px, follows the 12-column grid, with a 50px margin (left and right) and 20px gutter.

Mobile screens at minimum width, 390px, follows the 5-column grid, with 35 px margin and 20px gutter.

|         | **Margin** |
| ------- | ---------- |
| Desktop | 50px       |
| Mobile  | 35px       |

#### **Container**

All on-screen components are contained within a certain width regardless of the screen size. The max-width for containers are 886px. However, it will still have to respect the margins in all other screen sizes. 

| Max-width | 886px |
| --------- | ----- |

#### **Spacing** 

For the results layout within the university page, scholarship page, accommodation page, student loan page, part time job page, they all must be separated by 

| **Spacing**  | **Results** |
| ------------ | ----------- |
| Result Pages | 40px        |

#### **Margin**

|              | Top   |
| ------------ | ----- |
| Landing Page | 135px |
| List Pages   | 108px |
|              |       |

#### **Spacing**

Generic Spacing Values

| Name        | Code name   | Values | Description          |
| ----------- | ----------- | ------ | -------------------- |
| Small       | spacing-sm  | 20px   | Small spacing value  |
| Medium      | spacing-md  | 30px   | Medium spacing value |
| Large       | spacing-lg  | 40px   | Large spacing value  |
| Extra Large | spacing-xl  | 80px   | Extra large spacing  |
| Tiny        | spacing-xs  | 10px   | Tiny spacing value   |
| Huge        | spacing-xxl | 100px  | Huge spacing value   |

Component Specific Spacing Values:

| Component  | Desktop | Mobile |
| ---------- | ------- | ------ |
| Card Lists | 40px    | 30px   |
| Buttons    | 20px    | 15px   |
| Headers    | 60px    | 40px   |
| Footers    | 50px    | 30px   |



# [[Components]]

# [[Filter]]
---
One possible expansion of the filter feature is to survey users about what majors they would like to study (this can help provide information to Universities to create more classes aligned with student’s needs)



# [[Generic Display Text]]
---





# [[Border Radius]]
---