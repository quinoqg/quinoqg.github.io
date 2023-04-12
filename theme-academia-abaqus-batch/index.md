# Creating a batch file (.bat) to run an Abaqus analysis



## 1 Introduction
It not just about being geeky that we use command line (CMD in Windows) to run our Abaqus jobs. It is actually a matter of convenience. Being able to run our Abaqus simulations from a command line means that the process can actually be automated by using batch scripts. 

I find them extremely useful to save some time. It can be particularly useful when using subroutines (e.g. VUMAT or UMATs) where command lines can be long, or when analysing the sensitivity of a model to certain material parameters.

Here I give an example of a batch file using simple commands to run the Abaqus analysis.

## 2 Steps:

1. You need your input file (.inp) and optionally your user material (.for) file in the same folder     (working directory).
2. Copy my code in a text file, edit it according to the name of yor input file and working directory. Save it as file_name.bat.
3. Double click file_name.bat. This will open the CMD and run the analysis.
4. Your Abaqus Output Databse will appear in your working directory with the name job_name.odb.

Note that :: is used to make comments.

``` Batch
    @ECHO OFF
    :: just the title of the window:
    TITLE Running Abaqus now
    :: we need to set the work folder
    cd C:\Users\Goku\Documents\Simulations\WorkingDirectory
    ECHO This may take a while
    :: in the next line we call abaqus, the job and, and (if needed) the user material (UMAT or VUMAT) writing user=whatever.for
    abaqus inp=elastic.inp job=elastic interactive
    :: the interactive order will show us more detail of the running ananalysis
```

## 3 References
1. [Write a simple bat file](https://www.makeuseof.com/tag/write-simple-batch-bat-file)
2. [The ABAQUS FAQ](http://www-h.eng.cam.ac.uk/help/programs/fe/abaqus/faq68/abaqusf2.html)

