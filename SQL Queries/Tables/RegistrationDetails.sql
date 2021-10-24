USE [TrainingAssignment]
GO
/****** Object:  Table [SatheshRangasamy].[RegistrationDetails]    Script Date: 10/9/2018 9:49:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SatheshRangasamy].[RegistrationDetails](
	[PlayerID] [int] NOT NULL,
	[Status] [varchar](100) NOT NULL,
	[RegistrationType] [varchar](100) NOT NULL,
	[RegistrationID] [varchar](100) NOT NULL,
	[RegisteringClub] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[PlayerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
