INSERT ALL
    INTO TREE_TB VALUES ('음료', '1', null)
    INTO TREE_TB VALUES ('커피', '2', '음료')
    INTO TREE_TB VALUES ('맥주', '2', '음료')
    INTO TREE_TB VALUES ('아메리카노', '3', '커피')
    INTO TREE_TB VALUES ('카페라떼', '3', '커피')
    INTO TREE_TB VALUES ('카푸치노', '3', '커피')
    INTO TREE_TB VALUES ('맥스', '3', '맥주')
    INTO TREE_TB VALUES ('카스', '3', '맥주')
    INTO TREE_TB VALUES ('테라', '3', '맥주')
    INTO TREE_TB VALUES ('빵', '1', null)
    INTO TREE_TB VALUES ('케이크', '2', '빵')
    INTO TREE_TB VALUES ('고구마케이크', '3', '케이크')
    INTO TREE_TB VALUES ('치즈케이크', '3', '케이크')
    INTO TREE_TB VALUES ('생크림케이크', '3', '케이크')
SELECT *
FROM DUAL;

SELECT * FROM TREE_TB;

-- 하위트리
SELECT 
    LPAD(' ', 2*(LEVEL-1)) || tree_name, 
    tree_lvl, 
    tree_h_name, 
    level
FROM TREE_TB
START WITH tree_h_name IS NULL
CONNECT BY PRIOR tree_name = tree_h_name -- tree_name이 우선권을 가져감. //prior이  앞에 있으면 하향함, prior이 뒤에 있음 상향함
ORDER SIBLINGS BY tree_name; -- SIBLINGS : 트리구조를 가나다 순으로 정렬함

-- 상향트리. 치즈케이크 > 케이크 > 빵순으로 트리가 형성됨
SELECT LPAD(' ' , 2*(LEVEL-1)) || tree_name, tree_lvl, tree_h_name, level
FROM TREE_TB
START WITH tree_name = '치즈케이크'
CONNECT BY tree_name = PRIOR tree_h_name
ORDER SIBLINGS BY tree_name;

SELECT 
    LPAD(' ', 2*(LEVEL-1)) || tree_name, 
    tree_lvl, 
    tree_h_name, 
    level,
    CONNECT_BY_ROOT tree_name as tn, --tree네임의 최상단을 찾음
    CONNECT_BY_ISLEAF as bi, --최하위냐 아니냐를 0과 1로 구분함
    SYS_CONNECT_BY_PATH (tree_name, ' > '), -- 최상단부터 차례대로 패스전체 구조를 트리를 정렬
    SUBSTR(sys_connect_by_path (tree_name, ' > '), 4) chart --위의 정렬에서 최상단 > 뺌
FROM TREE_TB
START WITH tree_h_name IS NULL
CONNECt BY PRIOR tree_name = tree_h_name
ORDER SIBLINGS BY tree_name;


-- 음료 > 맥주 > 카스
SELECT 
    listagg(tree_name, ' > ') WITHIN GROUP (ORDER BY LEVEL DESC) AS GROUPNAME --tree_name만 가져오고, 상위식(DESC)으로 가져와라
FROM TREE_TB
START WITH tree_name = '카스'
CONNECT BY tree_name = PRIOR tree_h_name
ORDER SIBLINGS BY tree_name;



-- nocycle : 루프를 예외처리 하고 넘어감. 단 잘못된 데이터를 잡아내지 못할 수 있다
-- connect_by_iscycle : nocycle이 걸린 부분을 찾게 해줌 결과값 1 > 문제가 생겼다
SELECT
    LPAD(' ', 2*(LEVEL-1)) || tree_name,
    tree_lvl,
    tree_h_name,
    level,
    connect_by_root tree_name AS cbr,
    connect_by_isleaf AS cbi,
    SUBSTR(sys_connect_by_path (tree_name, ' > '), 4) AS up_path
FROM TREE_TB
START WITH tree_h_name is null
CONNECT BY PRIOR tree_name = tree_h_name
ORDER SIBLINGS BY tree_name;











