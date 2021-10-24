USE [TrainingAssignment]
GO
/****** Object:  Table [SatheshRangasamy].[SectionDetails]    Script Date: 10/9/2018 9:49:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SatheshRangasamy].[SectionDetails](
	[PlayerID] [int] NOT NULL,
	[Player] [varchar](100) NOT NULL,
	[Registration] [varchar](100) NOT NULL,
	[Transfer] [varchar](100) NOT NULL,
	[Intermediaries] [varchar](100) NOT NULL,
	[ITC] [varchar](100) NOT NULL,
	[GBE] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[PlayerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
