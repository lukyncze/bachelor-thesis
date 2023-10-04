%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Class VDocDiplCz                                         %
% Author: S\v{a}rka Vavre\v{c}kov\'{a}                     %
%         Silesian University Opava                        %
%         Czech Republic                                   %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\NeedsTeXFormat{LaTeX2e}[1995/12/01]
\ProvidesClass{vdocdiplcz}[2013/09/10 (SV, ver. 1.0)]

\RequirePackage{ifthen}
\newboolean{@vdraft}\setboolean{@vdraft}{false}
\newboolean{@englishonly}\setboolean{@englishonly}{false}
\newboolean{@mainmatter}\setboolean{@mainmatter}{false}
\newboolean{@jepodekovani}\setboolean{@jepodekovani}{true}
\newboolean{@jeobor}\setboolean{@jeobor}{false}
\newboolean{@jespec}\setboolean{@jespec}{false}

\DeclareOption{10pt}{\relax}
\DeclareOption{11pt}{\relax}
\DeclareOption{12pt}{\PassOptionsToClass{12pt}{article}}
\DeclareOption{letterpaper}{\relax}
\DeclareOption{legalpaper}{\relax}
\DeclareOption{executivepaper}{\relax}
\DeclareOption{a4paper}{\PassOptionsToClass{a4paper}{article}}
\DeclareOption{a5paper}{\relax}
\DeclareOption{b5paper}{\relax}
\DeclareOption{landscape}{\relax}
\DeclareOption{onecolumn}{\relax}
\DeclareOption{twocolumn}{\relax}
\DeclareOption{twoside}{\relax}
\DeclareOption{openright}{\relax}
\DeclareOption{openany}{\relax}
\DeclareOption{titlepage}{\relax}
\DeclareOption{notitlepage}{\relax}
\DeclareOption{leqno}{\PassOptionsToClass{leqno}{article}}
\DeclareOption{fleqn}{\PassOptionsToClass{fleqn}{article}}
\DeclareOption{openbib}{\PassOptionsToClass{openbib}{article}}
\DeclareOption{draft}{\PassOptionsToClass{draft}{article}}
\DeclareOption{final}{\PassOptionsToClass{final}{article}}
\DeclareOption{dvips}{\PassOptionsToClass{dvips}{article}}
\DeclareOption{vdraft}{\setboolean{@vdraft}{true}}


\ExecuteOptions{12pt,a4paper,onecolumn,oneside,openany,final}
\ProcessOptions

\LoadClass{article}
\topmargin -1.4cm
\headheight 1.2cm
\headsep 1cm
\oddsidemargin 1.5cm
\evensidemargin 1.5cm
\textheight 24.2cm
\textwidth 15cm
\RequirePackage{fancyhdr}



\def\nastavodstavec{%
  \setlength{\parskip}{0pt}%{1ex}
  \setlength{\parindent}{1.25cm}%{0pt}
}

%\setlength{\headheight}{13.6pt}


% radkovani
\newcommand{\@radkovani}{1.5}
\newcommand{\radkovanistandard}[1][1.5]{%
  \renewcommand{\@radkovani}{#1}}
\newcommand{\radkovaninorm}{%
  \renewcommand{\baselinestretch}{\@radkovani}\normalsize}
\newcommand{\radkovani}[1][\@radkovani]{%
  \renewcommand{\baselinestretch}{#1}\normalsize}  

\widowpenalty=5000
\clubpenalty=5000

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% ********************************************
% title page setting
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\newcommand{\@authorname}{Jméno a příjmení autora}
\newcommand{\@stprog}{Název studijního programu}
\newcommand{\@stobor}{Název studijního oboru}
\newcommand{\@stspecial}{Název specializace}
\newcommand{\@supervisor}{Jméno a příjmení vedoucího, vč. titulů}
\newcommand{\@titlecz}{Téma práce v češtině}
\newcommand{\@titleen}{Title of Theses in English}
\newcommand{\@thesistype}{Bakalářská práce}
\newcommand{\@abstractcz}{Abstrakt v češtině}
\newcommand{\@abstracten}{Abstract in English}
\newcommand{\@keywordscz}{Klíčová slova česky}
\newcommand{\@keywordsen}{Keywords in English}
\newcommand{\@schoolname}{Slezská univerzita v Opavě}
\newcommand{\@facultyname}{Filozoficko-přírodovědecká fakulta v Opavě}
\newcommand{\@institutename}{Ústav informatiky}
\newcommand{\@place}{Opava}
\newcommand{\@thisyear}{\number\year}

\newcommand{\@supervisorname}{Vedoucí bakalářské práce}
\newcommand{\@abstractczname}{Abstrakt}
\newcommand{\@abstractenname}{Abstract}
\newcommand{\@keywordsczname}{Klíčová slova}
\newcommand{\@keywordsenname}{Keywords}



\renewcommand{\author}[1]{\renewcommand{\@authorname}{#1}}
\newcommand{\autor}[1]{\renewcommand{\@authorname}{#1}}
\newcommand{\supervisor}[1]{\renewcommand{\@supervisor}{#1}}
\newcommand{\vedouci}[1]{\renewcommand{\@supervisor}{#1}}
\newcommand{\supervisorname}[1]{\renewcommand{\@supervisorname}{#1}}
\newcommand{\nazevvedouciho}[1]{\renewcommand{\@supervisorname}{#1}}

\newcommand{\studyprogram}[1]{\renewcommand{\@stprog}{#1}}
\newcommand{\studijniprogram}[1]{\renewcommand{\@stprog}{#1}}
\newcommand{\studijniobor}[1]{\renewcommand{\@stobor}{#1}\setboolean{@jeobor}{true}}
\newcommand{\studybranch}[1]{\renewcommand{\@stobor}{#1}\setboolean{@jeobor}{true}}
\newcommand{\studijnispec}[1]{\renewcommand{\@stspecial}{#1}\setboolean{@jespec}{true}}
\newcommand{\studyspec}[1]{\renewcommand{\@stspecial}{#1}\setboolean{@jespec}{true}}

\newcommand{\titlecz}[1]{\renewcommand{\@titlecz}{#1}}
\newcommand{\nazev}[1]{\renewcommand{\@titlecz}{#1}}
\newcommand{\nazevanglicky}[1]{\renewcommand{\@titleen}{#1}}
\newcommand{\titleen}[1]{\renewcommand{\@titleen}{#1}}

\newcommand{\schoolname}[1]{\renewcommand{\@schoolname}{#1}}
\newcommand{\facultyname}[1]{\renewcommand{\@facultyname}{#1}}
\newcommand{\institutename}[1]{\renewcommand{\@institutename}{#1}}
\newcommand{\instituteaddress}[1]{\renewcommand{\@instituteaddress}{#1}}
\newcommand{\place}[1]{\renewcommand{\@place}{#1}}

\newcommand{\dateyear}[1]{\renewcommand{\@thisyear}{#1}}
\newcommand{\rok}[1]{\renewcommand{\@thisyear}{#1}}

\newcommand{\thesistype}[1]{\renewcommand{\@thesistype}{#1}}
\newcommand{\typprace}[1]{\renewcommand{\@thesistype}{#1}}

\newcommand{\abstractcz}[1]{\renewcommand{\@abstractcz}{#1}}
\newcommand{\abstrakt}[1]{\renewcommand{\@abstractcz}{#1}}
\newcommand{\abstracten}[1]{\renewcommand{\@abstracten}{#1}}
\newcommand{\abstraktanglicky}[1]{\renewcommand{\@abstracten}{#1}}

\newcommand{\abstractnames}[2]{\renewcommand{\@abstractczname}{#1}\renewcommand{\@abstractenname}{#2}}
\newcommand{\keywordnames}[2]{\renewcommand{\@keywordsczname}{#1}\renewcommand{\@keywordsenname}{#2}}

\newcommand{\keywordscz}[1]{\renewcommand{\@keywordscz}{#1}}  
\newcommand{\klicovaslova}[1]{\renewcommand{\@keywordscz}{#1}}  
\newcommand{\keywordsen}[1]{\renewcommand{\@keywordsen}{#1}}
\newcommand{\klicovaslovaanglicky}[1]{\renewcommand{\@keywordsen}{#1}}

\newboolean{@longabstract}
\setboolean{@longabstract}{false}
\newcommand{\longabstract}{\setboolean{@longabstract}{true}}
\newcommand{\dlouhyabstrakt}{\setboolean{@longabstract}{true}}
\newcommand{\shortabstract}{\setboolean{@longabstract}{false}}
\newcommand{\kratkyabstrakt}{\setboolean{@longabstract}{false}}




%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  title page generating
%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\pagestyle{empty}
\clearpage

\def\@desky{%
	\begingroup
  \begin{center}
    \fontsize{18pt}{25pt}\selectfont
    {\MakeUppercase{\@schoolname}}
    \\
    \fontsize{16pt}{24pt}\selectfont
    \@facultyname
    \vspace*{\stretch{2}}\par
    \fontsize{20pt}{28pt}\selectfont
		{\bfseries\MakeUppercase{\@thesistype}}
  \end{center}
  \vspace*{\stretch{3}}\par
  \fontsize{16pt}{24pt}\selectfont
	\@place{} \@thisyear\hfill \@authorname
	\endgroup
	\\[1em]\rule{1pt}{0pt}
}


\def\@titulnilist{%
	\begingroup
  \begin{center}
    \fontsize{18pt}{25pt}\selectfont
    {\MakeUppercase{\@schoolname}}
    \\
    \fontsize{16pt}{24pt}\selectfont
    \@facultyname
    \vspace*{\stretch{3}}\par
    \@authorname
    \vspace*{2em}\par
    \fontsize{14pt}{21pt}\selectfont
		Studijní program: \@stprog
		\ifthenelse{\boolean{@jeobor}}{%
    \\
		Studijní obor: \@stobor}{}    
		\ifthenelse{\boolean{@jespec}}{%
		\\
		Specializace: \@stspecial}{}
    \vspace*{\stretch{2}}\par
    \fontsize{16pt}{24pt}\selectfont
    {\bfseries
			\@titlecz\vspace{2em}\par
			\@titleen
		}
    \vspace*{\stretch{1}}\par
    \fontsize{14pt}{21pt}\selectfont
		\@thesistype
  \end{center}
  \vspace*{\stretch{5}}\par
  \fontsize{14pt}{21pt}\selectfont
	\@place{} \@thisyear\hfill \@supervisorname{}:
	\\[4pt]
	\rule{1pt}{0pt}\hfill \@supervisor
	\\[1em]\rule{1pt}{0pt}
	\endgroup
}



\def\@abstrakty{%
	\begingroup\noindent\bfseries \@abstractczname\endgroup
	\vspace{2pt}\par
	\@abstractcz
	\vspace{2em}\par
	\begingroup\noindent\bfseries \@keywordsczname\endgroup
	\vspace{2pt}\par
	\noindent \@keywordscz
	\if@longabstract
		% jedna stranka na cesky abstrakt a klicova slova, dalsi stranka na anglicke
		\clearpage				
	\else
		% vse na jedne strance
		\vspace*{\stretch{1}}\par
	\fi
	\begingroup\noindent\bfseries \@abstractenname\endgroup
	\vspace{2pt}\par
	\@abstracten
	\vspace{2em}\par
	\begingroup\noindent\bfseries \@keywordsenname\endgroup
	\vspace{2pt}\par
	\noindent \@keywordsen
	\if@longabstract
		\relax
	\else
		\vspace*{\stretch{3}}\rule{1pt}{0pt}
	\fi	
}


\def\kopiepodkladu{%
  \rule{1pt}{0pt}}

\newcommand{\@cestneprohlasenitext}{%
  Prohlašuji, že ......}

\newcommand{\cestneprohlaseni}[1]{%
  \renewcommand{\@cestneprohlasenitext}{#1}}
\newcommand{\declaration}[1]{%
  \renewcommand{\@cestneprohlasenitext}{#1}}

\def\declarationname{Čestné prohlášení}    
\def\@cestneprohlaseni{%
	\rule{1pt}{0pt}\vspace{\fill}\par
  \begin{quote}
  \begingroup\bfseries 	\declarationname \endgroup
   \vspace{2pt}\par
   \@cestneprohlasenitext
   \vspace{2.5em}\par
 	 V Opavě dne \protect\today\hfill
 	 \parbox{.42\textwidth}{\begin{center}\rule{0pt}{1pt}\dotfill\rule{0pt}{1pt}\\[2pt]\@authorname\end{center}}$\!\!$
   \vspace{2em}
\end{quote}\vspace{2em}} 	


\newcommand{\@podekovanitext}{%
  Rád bych poděkoval......}

\newcommand{\podekovani}[1]{\renewcommand{\@podekovanitext}{#1}}

\def\acknowledgementsname{Poděkování}
\def\@acknowledgements{%
	\rule{1pt}{0pt}\vspace{\fill}\par
  \begin{quote}
  \begingroup\bfseries
 	\acknowledgementsname
  \endgroup
  \vspace{2pt}\par
  \@podekovanitext
  \end{quote}\vspace{4em}\rule{1pt}{0pt}} 


\def\bezpodekovani{\setboolean{@jepodekovani}{false}}



\def\maketitlepages{%
	\@desky
	\clearpage
	\@titulnilist
	\clearpage
	\kopiepodkladu
	\clearpage	
  \fontsize{12pt}{18pt}\selectfont
	\@abstrakty%
	\clearpage
	\@cestneprohlaseni
	\clearpage
	\if@jepodekovani
  	\@acknowledgements
  \fi 	
	\clearpage
}




% odbourani sirotku a vdov - osamelych radku
 \setlength{\clubpenalty}{5000}
 \setlength{\widowpenalty}{5000}




% toto dat mezi obsahem a uvodem
\newcommand{\mainmatter}{%
  \setboolean{@mainmatter}{true}
  \clearpage%
  \pagenumbering{arabic}%
  \pagestyle{fancy}%
  \lhead{}  
  \chead{}  
  \rhead{\thepage}
  \cfoot{}
  \renewcommand{\headrulewidth}{0pt}%
}

\newcommand{\kapitoly}{\mainmatter}


\newcommand{\backmatter}{%
  \clearpage%
  \pagenumbering{roman}
}

\setcounter{tocdepth}{3}
\setcounter{secnumdepth}{3}


% aby vsechny kapitoly prvni urovne vcetne necislovanych byly v obsahu

\let\@sectionpuvodni\section
\renewcommand{\section}{\clearpage\@ifstar{\@@kapitola}{\@kapitola}}

\newcommand{\@kapitola}{\@ifnextchar[{\@kapitolatwop}{\@kapitolaonep}}
\newcommand{\@kapitolaonep}[1]{%
  \protect\@sectionpuvodni{#1}%
}

\newcommand{\@kapitolatwop}[2][\@empty]{%
  \protect\@sectionpuvodni[#1]{#2}%
}

\newcommand{\@@kapitola}{\@ifnextchar[{\@@kapitolatwop}{\@@kapitolaonep}}   
\newcommand{\@@kapitolaonep}[1]{%
  \protect\@sectionpuvodni*{#1}%
  \if@mainmatter\addcontentsline{toc}{section}{#1}\fi}

\newcommand{\@@kapitolatwop}[2][\@empty]{%
%  \protect\@sectionpuvodni*[#1]{#2}%
  \protect\@sectionpuvodni*{#2}%
  \if@mainmatter\addcontentsline{toc}{section}{#1}\fi}


\AtBeginDocument{\InputIfFileExists{config.tex}%
  {\typeout{File config.tex included}}%
  {}}

\endinput

