INSERT ALL
    INTO TREE_TB VALUES ('����', '1', null)
    INTO TREE_TB VALUES ('Ŀ��', '2', '����')
    INTO TREE_TB VALUES ('����', '2', '����')
    INTO TREE_TB VALUES ('�Ƹ޸�ī��', '3', 'Ŀ��')
    INTO TREE_TB VALUES ('ī���', '3', 'Ŀ��')
    INTO TREE_TB VALUES ('īǪġ��', '3', 'Ŀ��')
    INTO TREE_TB VALUES ('�ƽ�', '3', '����')
    INTO TREE_TB VALUES ('ī��', '3', '����')
    INTO TREE_TB VALUES ('�׶�', '3', '����')
    INTO TREE_TB VALUES ('��', '1', null)
    INTO TREE_TB VALUES ('����ũ', '2', '��')
    INTO TREE_TB VALUES ('��������ũ', '3', '����ũ')
    INTO TREE_TB VALUES ('ġ������ũ', '3', '����ũ')
    INTO TREE_TB VALUES ('��ũ������ũ', '3', '����ũ')
SELECT *
FROM DUAL;

SELECT * FROM TREE_TB;

-- ����Ʈ��
SELECT 
    LPAD(' ', 2*(LEVEL-1)) || tree_name, 
    tree_lvl, 
    tree_h_name, 
    level
FROM TREE_TB
START WITH tree_h_name IS NULL
CONNECT BY PRIOR tree_name = tree_h_name -- tree_name�� �켱���� ������. //prior��  �տ� ������ ������, prior�� �ڿ� ���� ������
ORDER SIBLINGS BY tree_name; -- SIBLINGS : Ʈ�������� ������ ������ ������

-- ����Ʈ��. ġ������ũ > ����ũ > �������� Ʈ���� ������
SELECT LPAD(' ' , 2*(LEVEL-1)) || tree_name, tree_lvl, tree_h_name, level
FROM TREE_TB
START WITH tree_name = 'ġ������ũ'
CONNECT BY tree_name = PRIOR tree_h_name
ORDER SIBLINGS BY tree_name;

SELECT 
    LPAD(' ', 2*(LEVEL-1)) || tree_name, 
    tree_lvl, 
    tree_h_name, 
    level,
    CONNECT_BY_ROOT tree_name as tn, --tree������ �ֻ���� ã��
    CONNECT_BY_ISLEAF as bi, --�������� �ƴϳĸ� 0�� 1�� ������
    SYS_CONNECT_BY_PATH (tree_name, ' > '), -- �ֻ�ܺ��� ���ʴ�� �н���ü ������ Ʈ���� ����
    SUBSTR(sys_connect_by_path (tree_name, ' > '), 4) chart --���� ���Ŀ��� �ֻ�� > ��
FROM TREE_TB
START WITH tree_h_name IS NULL
CONNECt BY PRIOR tree_name = tree_h_name
ORDER SIBLINGS BY tree_name;


-- ���� > ���� > ī��
SELECT 
    listagg(tree_name, ' > ') WITHIN GROUP (ORDER BY LEVEL DESC) AS GROUPNAME --tree_name�� ��������, ������(DESC)���� �����Ͷ�
FROM TREE_TB
START WITH tree_name = 'ī��'
CONNECT BY tree_name = PRIOR tree_h_name
ORDER SIBLINGS BY tree_name;



-- nocycle : ������ ����ó�� �ϰ� �Ѿ. �� �߸��� �����͸� ��Ƴ��� ���� �� �ִ�
-- connect_by_iscycle : nocycle�� �ɸ� �κ��� ã�� ���� ����� 1 > ������ �����
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











