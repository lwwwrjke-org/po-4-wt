# ПО-4 Лабораторные работы

## Важное замечание
В бранч *main* никакие изменения не делать.  
Также, в этом бранче будут лежать только методические указания.  
  
## Git Workflow (Read first)
1) Каждому необходимо создать новый бранч на основе *main*. Это будет у каждого основная ветка, куда он(-а) будут заливать прогресс по лабораторным работам.  
2) Ветку, точнее, имя ветки, необходимо сделать формата *Familija_Imja* (кто не будет делать в таком формате свою основную ветку - будем бить морально по рукам).  
3) В этой ветке, которая будет Вашей основной, необходимо создать папку *Report/Familija_Imja*, куда будут заливаться лабораторные работы.  
4) Далее, когда необходимо сдавать лабораторную работу, необходимо на основе Вашей ветки сделать другую с форматом имени *lab#/Familija_Imja*, где *#* есть номер лабораторной работы, а *Familija_Imja* есть Фамилия_Имя, как и во втором пункте(если кто не понял). Далее, в папке *Report/Familija_Imja/lab#*, где # есть опять-таки номер лабораторной работы.  
По ходу учебного семетра в бранч *main* будут добавляться новые методички. Необходимо будет держать свою основную ветку *Familija_Imja* в "свежем" состоянии(по этому поводу можно просить на лекции/лабах у преподавателя).  
5) Как только вы заливаете изменения в ветку *lab#/Familija_Imja*, необходимо будет создать *Pull Request* из ветки *lab#/Familija_Imja* в ветку *Familija_Imja*, добавить преподавателей в Reviewers или по одиночке, или выбрать команду *Teachers*.  
6) Если что-то будет сделано не по текущему плану, лабораторная работа не будет приниматься.
7) Лабораторная работа считается сданной, когда она залита сюда, Pull Request одобрен кем-то из преподавателей, показана преподавателю или проверена им из ветки с PR.  
8) Не рекомендую закрывать PR самостоятельно, поскольку может возникнуть путанница.  
9) Примеры веток и открытого Pull Request будет висеть здесь же, в репозитории.  
10) Коммит в ветку с лабой должен быть следующего формата - *lab#/Familija_Imja : Text goes here*, где *lab#/Familija_Imja* уже понятно что такое, а *Text goes here* краткий отчет о проделанных действиях. Это может быть выполнение какого-то пункта из лабораторной работы или вообще весь итоговый результат выполнения лабы. Но такого может и не быть, потому что в Ваших PR преподаватель может попросить выполнить дополнительные действия, например, задание на защиту лабы.  
11) Методички будут лежать в папке *Instructions*.  
12) Файлы *.env* не удалять!  