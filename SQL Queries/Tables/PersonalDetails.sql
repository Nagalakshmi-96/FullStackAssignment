USE [TrainingAssignment]
GO
/****** Object:  Table [SatheshRangasamy].[PersonalDetails]    Script Date: 10/9/2018 9:47:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SatheshRangasamy].[PersonalDetails](
	[PlayerID] [int] IDENTITY(1000,1) NOT NULL,
	[FirstName] [varchar](100) NOT NULL,
	[LastName] [varchar](100) NOT NULL,
	[PreferredName] [varchar](100) NOT NULL,
	[Gender] [varchar](100) NOT NULL,
	[DateofBirth] [varchar](100) NOT NULL,
	[CountryofBirth] [varchar](100) NOT NULL,
	[TownofBirth] [varchar](100) NOT NULL,
	[Nationalities] [varchar](100) NOT NULL,
	[NationalInsuranceNumber] [varchar](100) NOT NULL,
	[isDeleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[PlayerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [SatheshRangasamy].[PersonalDetails] ADD  DEFAULT ((0)) FOR [isDeleted]
GO
